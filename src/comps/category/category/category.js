import React from 'react';
import './category.styles.css';
import Controls from '../../../shared/controls/controls.component';
import CategoryTitle from './category-title';
import CategoryEdit from './category-edit';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
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
      isEdit: true
    })
  };

  editOff = (save) => {
    this.setState({
      isEdit: false
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

  add = () => this.props.actions.add('New Category', this.props.item.id);

  render() {

    const classes = ['item'];
    classes.push(this.props.item === this.props.category ? 'selected' : null);
    const style = {
      marginLeft: this.props.depth * 20
    };
    const controlsDescription = [
      {
        name: 'edit',
        classes: 'fa fa-edit',
        handler: this.actions.editOn
      },
      {
        name: 'remove',
        classes: 'fa fa-trash',
        handler: this.actions.remove
      },
      {
        name: 'add_subcategory',
        classes: 'fa fa-plus',
        handler: this.actions.add
      }
    ];
    const controlsDescriptionEdit = [
      {
        name: 'save',
        classes: 'fa fa-check',
        handler: () => this.actions.editOff(true)
      },
      {
        name: 'cancel',
        classes: 'fa fa-times',
        handler: () => this.actions.editOff()
      }
    ];

    const body = this.state.isEdit
      ? <CategoryEdit title={this.props.item.name}
                      callback={this.actions.edit}/>
      : <CategoryTitle title={this.props.item.name}
                       callback={this.actions.select}/>;
    const controls = this.state.isEdit
      ? <Controls controls={controlsDescriptionEdit}/>
      : <Controls controls={controlsDescription}/>;

    return (
      <div className={classes.join(' ')} style={style}>
        {body}
        {controls}
      </div>
    )
  }
}