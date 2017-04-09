import React from 'react';
import Controls from '../../../shared/controls/controls.component';
import CategoryTitle from './category-title';
import CategoryEdit from './category-edit';
import './category.styles.css';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditCategory: false,
      title: ''
    };

    this.actions = {
      select: this.select,
      edit: this.edit,
      editOn: this.editOn,
      editOff: this.editOff,
      remove: this.remove,
      add: this.add
    };
  }

  editOn = () => {
    this.setState({
      isEditCategory: true
    })
  };

  editOff = (save) => {
    this.setState({
      isEditCategory: false
    });
    if (save) {
      this.props.actions.edit(this.props.item, this.state.title)
    }
  };

  select = () => this.props.actions.select(this.props.item);

  edit = (title) => {
    this.setState({
      title: title
    })
  };

  remove = () => this.props.actions.remove(this.props.item);

  add = () => this.props.actions.add('...new subcategory', this.props.item.id);

  assign = () => this.props.actions.assign(this.props.item);

  render() {

    const classes = ['category-component'];
    classes.push(this.props.item === this.props.category ? 'selected' : null);
    const style = {
      marginLeft: this.props.depth * 20
    };
    const controlsDescriptionView = [
      {
        name: 'edit',
        classesI: 'fa fa-edit',
        callback: this.actions.editOn
      },
      {
        name: 'remove',
        classesI: 'fa fa-trash',
        callback: this.actions.remove
      },
      {
        name: 'add_subcategory',
        classesI: 'fa fa-plus',
        callback: this.actions.add
      }
    ];
    const controlsDescriptionEditCategory = [
      {
        name: 'save',
        classesI: 'fa fa-check',
        callback: () => this.actions.editOff(true)
      },
      {
        name: 'cancel',
        classesI: 'fa fa-times',
        callback: () => this.actions.editOff()
      }
    ];

    const controlsDescriptionEditTodo = [
      {
        name: 'assign',
        classesI: 'fa fa-mail-reply',
        callback: () => this.assign()
      }
    ];

    let controlsDescription = controlsDescriptionView;
    if (this.props.isEditTodo) {
      controlsDescription = controlsDescriptionEditTodo;
    } else if (this.state.isEditCategory) {
      controlsDescription = controlsDescriptionEditCategory;
    }

    const body = this.state.isEditCategory
      ? <CategoryEdit title={this.props.item.name}
                      callback={this.actions.edit}/>
      : <CategoryTitle title={this.props.item.name}
                       callback={this.actions.select}/>;

    const controls = <Controls controls={controlsDescription}/>;

    return (
      <div className={classes.join(' ')} style={style}>
        {body}
        {controls}
      </div>
    )
  }
}