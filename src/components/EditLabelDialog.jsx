import React from 'react';
import { Button, ListItem, ListItemIcon, ListItemText, InputBase, Divider } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import editIcon from "../assets/icons/editIcon.svg";
import saveButton from "../assets/icons/saveButton.svg";
import plus from "../assets/icons/plus.svg";
import SingleLabel from "./SingleLabel";




export default class ResponsiveDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            label:'',
        }
    }

    handleClickOpen = (event) => {
        this.setState({ open: true });
        this.props.noteState(event.target.textContent);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    // mouseOver = () => {
    //     this.setState({
    //         delIcon: !this.state.delIcon
    //     })
    // }
    createNewLabel = (event) =>{
        this.setState({
            [event.target.name]:event.target.value,
        })
    }

    saveLabel=()=>{
        if (this.state.lable !== '') {
            var NewLabelName = {
                label:this.state.label
            }
            this.props.newLabel(NewLabelName);
            this.setState({
                label:''
            })
        }
    }

    removeLabel = (event) => {
        // console.log(event);
        
    }

    render() {
       
        const { fullScreen } = this.props;
        var labels = this.props.labelsName.map((labelData) => {
            return (
                <SingleLabel key={labelData.id} label={labelData} removeLabel = {this.props.removeLabel} updateLabel={this.props.updateLabel}/>);
        });
        return (
            <div>
                <ListItem className='menuListItem' style ={this.props.menuState==='Edit labels'?{backgroundColor:'#feefc3'}:{backgroundColor:'#ffffff'}} button onClick={this.handleClickOpen}>
                    <ListItemIcon>
                        <img src={editIcon} className="menuBarIcon" alt="editIcon   " />
                    </ListItemIcon>
                    <ListItemText>Edit labels</ListItemText>
                </ListItem>

                <Dialog
                    fullScreen={fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogContent>
                        <div>
                            <samp className='editLabelSpan'>Edit label</samp>
                        </div>
                        <div className='labelEdit' style={{ display: 'flex' }}>
                            <img src={plus} className="image" alt="plus   " />
                            <InputBase  className='labelInput' onChange={this.createNewLabel} placeholder="Create new label" name='label' fullWidth  value={this.state.label}></InputBase>
                            <img src={saveButton} className="image" alt="saveButton   " onClick={this.saveLabel}/>
                        </div>

                        <div >
                            {labels}
                        </div>
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <div className='divCloseButton'>
                            <Button className='noteCloseButton' onClick={this.handleClose}>Done</Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

