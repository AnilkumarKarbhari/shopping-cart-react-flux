import * as React from 'react';
import IProduct from './../models/product';
import * as superagent from 'superagent';


interface IProps{
    match:{
        params:{
            productId:string
        }
    }
}
interface IState{
    productDetail:IProduct
}
export default class ProductDetails extends React.Component<IProps>{
    public state:Readonly<Partial<IState>> = {
        productDetail:undefined
    };

    componentWillMount(){
        const url=`https://5b209234ca762000147b254f.mockapi.io/products/${this.props.match.params.productId}`;
        superagent.get(url).end((err:superagent.ResponseError,res:superagent.Response)=>{
           this.setState({
        productDetail:res.body

           });
           });
        
    }
    public render(){
        return (
            <div> product list</div>



        )
    }
}