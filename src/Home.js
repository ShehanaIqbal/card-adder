import React, {Component} from 'react';
import Navbar from './Navbar.js';
import Card from './card.js';
import './Home.css';
//import IdGenerator from 'react-id-generator';
//import AddButton from './add_button.js';
import firebase from 'firebase';
//import { any } from 'prop-types';

class Home extends Component{

        state = {
            title: '',
            content: '',
            isHidden:true,
            cards:[],
        };

    generateHexString=(length)=> {
        var ret = "";
        while (ret.length < length) {
          ret += Math.random().toString(16).substring(2);
        }
        return ret.substring(0,length);
    }

    deleteThisCard=(id)=>{
        console.log(id);
        firebase.database().ref("card").update({
            [id]:{
                ...this.state.cards[id],
                isDeleted:true
            }
       })
    }

    componentDidMount=()=>{
        
        firebase.database().ref("card").on("value", snapshot => {
            if(snapshot && snapshot.exists()){
                let cardSet=[]
                snapshot.forEach(item=>{
                    var temp=<Card 
                        title={item.val().title} 
                        content={item.val().content} 
                        deleteCard={()=>{this.deleteThisCard(item.val().id)} }
                        id={item.val().id}
                        isDeleted={item.val().isDeleted}>
                        </Card>
                    if (item.isDeleted!==true){
                        cardSet.push(temp)
                    }
                })
                this.setState({
                    cards:cardSet
                })
            }else{
                console.log('snapshot does not exist');
            }
        })
        }

    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitForm(e){
        e.preventDefault();
    }
    

    buttonClicked=()=>{
        if (this.state.isHidden===false){
            this.setState({
                isHidden:true
        }) 
        }else{
            this.setState({
                isHidden:false
            })
        }
    }

    saveButtonPressed=()=>{
        var id_number=Date.now()
        firebase.database().ref("card").child(id_number).set({
            title:this.state.title,
            content: this.state.content,
            id:id_number,
            isDeleted:false,
        })
    }

    render(){
        return(
            <div>
                <Navbar></Navbar>
                <br></br>
                <br></br>
                <h2 className='homeTitle'>Welcome to the card adder</h2><br></br>
                <button className='addButton' onClick={this.buttonClicked} >Add new card</button><br></br><br></br>
                <div  className='addForm' hidden={this.state.isHidden}>
                    <form onSubmit={this.onSubmitForm}>
                        <input placeholder='title' label='Title' name='title' onChange={this.onChangeHandler} /><br></br><br></br>
                        <input placeholder='content' label='Content' name='content' onChange={this.onChangeHandler} /><br></br><br></br>
                        <button onClick={this.saveButtonPressed}>Save</button>
                    </form>
                </div>
                {this.state.cards}
                </div>
        )
    }
}

export default Home;