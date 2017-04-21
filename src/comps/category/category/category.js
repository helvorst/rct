import React from 'react';
import Controls from '../../../shared/controls/controls.component';
import './category.styles.css';
import InputBtn from '../../../shared/input-button/input-button.component';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditCategory: false
    };

    this.isEditTodo =  props.params && props.params.category;

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

  editOff = (name) => {
    this.setState({
      isEditCategory: false
    });
    if (name) {
      this.props.actions.edit({...this.props.item, name: name})
    }
  };


  // in view mode
  select = () => this.props.actions.select(this.props.item.id);

  remove = () => this.props.actions.remove(this.props.item.id);

  add = () => this.props.actions.add(null, this.props.item.id);

  // in edit todo mode
  assign = () => this.props.actions.select(this.props.item.id);

  render() {

    const classes = ['category-component'];
    classes.push(this.props.item.id === this.props.category ? 'selected' : null);
    const style = {
      marginLeft: this.props.depth * 20
    };
    const viewbtns = [
      {
        name: 'edit',
        classesA: "btn btn-sm",
        classesI: 'fa fa-edit',
        callback: this.actions.editOn
      },
      {
        name: 'remove',
        classesA: "btn btn-sm",
        classesI: 'fa fa-trash',
        callback: this.actions.remove
      },
      {
        name: 'add_subcategory',
        classesA: "btn btn-sm",
        classesI: 'fa fa-plus',
        callback: this.actions.add
      }
    ];

    const todoEditBtns = [
      {
        name: 'assign',
        classesA: "btn btn-sm",
        classesI: 'fa fa-mail-reply',
        callback: () => this.assign()
      }
    ];

    let controls = this.isEditTodo ? todoEditBtns : viewbtns;

    const editbtns = [
      {
        name: 'save',
        classesA: 'btn btn-sm',
        classesI: 'fa fa-check',
        callback: (newname) => this.actions.editOff(newname)
      },
      {
        name: 'cancel',
        classesA: 'btn btn-sm',
        classesI: 'fa fa-times',
        callback: () => this.actions.editOff()
      }
    ];

    const editor = <InputBtn
      value={this.props.item.name}
      buttons={editbtns}/>;

    const viewer = (
      <div className="category">
        <div className="category-title"
             onClick={() => this.select()}>
          {this.props.item.name}
        </div>
        <Controls controls={controls}/>
      </div>);

    return (
      <div className={classes.join(' ')} style={style}>
        {this.state.isEditCategory ? editor : viewer}
      </div>
    )
  }
}