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
      name: this.props.item.name
    };

    this.actions = {
      select: () => this.props.actions.select(this.props.item)
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
    if(save) {
      this.props.actions.edit(this.props.item, this.state.name)
    }
  };


  render() {
    console.log(this.props)
    const classes = ['item'];
    classes.push(this.props.item.parent ? 'item--sub' : null);
    classes.push(this.props.item === this.props.category ? 'item--selected' : null);

    const controlsDescription = [
      {
        name: 'editOn',
        classes: 'fa fa-edit',
        handler: this.editOn
      }
    ];
    const controlsDescriptionEdit = [
      {
        name: 'save',
        classes: 'fa fa-check',
        handler: () => this.editOff(true)
      },
      {
        name: 'cancel',
        classes: 'fa fa-times',
        handler: () => this.editOff()
      }
    ];

    const body = this.state.isEdit
      ? <CategoryEdit title={this.state.name}/>
      : <CategoryTitle title={this.state.name}
                       actions={this.actions}/>;
    const controls = this.state.isEdit
      ? <Controls controls={controlsDescriptionEdit}/>
      : <Controls controls={controlsDescription}/>;

    return (
      <div className={classes.join(' ')}>
        {body}
        {controls}
      </div>
    )
  }
}