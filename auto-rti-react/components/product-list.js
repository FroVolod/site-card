import Link from 'next/link'
import FilterProductList from './filter-product-list'

export default class extends React.Component {
    state = {
        dataProductList: null
    }

    fetchProductList = () => {
        fetch(`http://127.0.0.1:9000/api/uploads`)
            .then((resProductList) => resProductList.json())
            .then((dataProductList) => {
                this.setState({ dataProductList })
            })
    }

    componentDidMount() {
        this.fetchProductList()
    }

    render() {
        let productList = null
        if (this.state.dataProductList !== null) {
            
            for (var product in this.state.dataProductList.results) {
                console.log('###', this.state.dataProductList.results[product])
                productList = this.state.dataProductList.results.map(({product_name, catalog_id, price}) => (
                    <div className="row">
                        <div  className="col-sm-6">
                        <Link href="">
                            <a>{product_name}</a>
                        </Link>
                        </div>
                        <div className="col-sm-4">
                        {catalog_id}
                        </div>
                        <div className="col-sm-2">
                        {price}
                        </div>
                    </div>
                        
                ))
            }
        }

        return (
            <div className="container price">
                {console.log('*********', this.state.dataProductList)}
                <FilterProductList/>
                <div>
                    {this.state.dataProductList === null ? null : productList}
                </div>
                <style jsx>{`
                    .price{
                        background: #fff;
                        padding: 10px;
                        margin: 5px;
                        height: 250px;
                        width: 450px;
                        overflow-y: scroll;
                        overflow-x: hidden;
                    }
                `}
                </style>
            </div>
        )
    }
}