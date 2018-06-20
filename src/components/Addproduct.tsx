
import * as React from 'react';
import * as superagent from 'superagent';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


interface IState {
    isModalOpen: boolean;
}
export default class Addproduct extends React.Component<{}, IState> {
     public state : Readonly<IState> = {
        isModalOpen: false
    };
    private titleInput:HTMLInputElement;
    private descriptionInput:HTMLInputElement;
    private priceInput:HTMLInputElement;
       private imageUrlInput:HTMLInputElement;

    public onFormSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
      
        const inputval={
            titleInput:this.titleInput.value,
            descriptionInput:this.descriptionInput.value,
            priceInput:this.priceInput.value,
            imageUrlInput:this.imageUrlInput.value
        }
        console.log(inputval)
        superagent
            .post('http://5b209234ca762000147b254f.mockapi.io/products')
            .send(inputval)
            .set('accept', 'json')
            .end(() => {
                this.setState({
                    isModalOpen: true
                });
            });
    }
  

    public setTitleInput =(e1:HTMLInputElement)=>{
        this.titleInput=e1;
      
    }
      public setdescriptionInput =(e1:HTMLInputElement)=>{
        this.descriptionInput=e1;
    }
      public setpriceInput =(e1:HTMLInputElement)=>{
        this.priceInput=e1;
    }
      public setimageUrlInput =(e1:HTMLInputElement)=>{
        this.imageUrlInput=e1;
    }
    public closeModal = () => {
        this.setState({
            isModalOpen: false
        });
    }

    public getmodel=()=>{
      return(
          <Modal isOpen={this.state.isModalOpen}>
                <ModalHeader>
                    Message
                </ModalHeader>
                <ModalBody>
                    Product Added
                </ModalBody>
                <ModalFooter>
                    <button 
                        onClick={this.closeModal}
                        className="btn btn-default">
                        Close
                    </button>
                </ModalFooter>
            </Modal>
          
      )
    }

  public render(){
      return(
          <div className="container">
              {this.getmodel}
          <form onSubmit={this.onFormSubmit} >
           <div className="form-group">
    <label  htmlFor="title">product Title:</label>
    <input type="title" ref={this.setTitleInput} className="form-control" id="title"/>
  </div>
  <div className="form-group">
    <label  htmlFor="description">Description:</label>
    <input type="description" ref={this.setdescriptionInput} className="form-control" id="description"/>
  </div>
    <div className="form-group">
    <label  htmlFor="Price">Price:</label>
    <input type="price" ref={this.setpriceInput} className="form-control" id="price"/>
  </div>
     <div className="form-group">
    <label  htmlFor="imageUrl">imgeUrl:</label>
    <input type="imageUrl" ref={this.setimageUrlInput} className="form-control" id="imageUrl"/>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>
          </form>
          </div>
          
      )
  }

}
