import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import 'bootstrap/dist/css/bootstrap.min.css'

import ProductList from './product-list'



export default class extends React.Component {
    state = {
        dataListPage: null,
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:9000/api/auto-rti/`)
            .then((resListPage) => resListPage.json())
            .then((dataListPage) => {
                this.setState({ dataListPage })
            })        
    }
    
    render() {
        console.log('@@@@', this.state.dataListPage)
        let menu = null
        if (this.state.dataListPage !== null) {
            menu = this.state.dataListPage.results.map(({id, slug, title}) => (
                <li key={id} className="menu">
                    <Link href={`/?page=${slug}`}>
                        <a>{title}</a>
                    </Link>
                    <style jsx>{`
                        .menu{
                            background: #0000aa;
                            padding: 2px;
                            margin: 6px;
                        }                       
                    `}
                    </style>
                </li>
            ))
        }
        return (
            <div>
                <title>Авторезинотехника РТИ Лоск Харьков Украина резинотехнические изделия сальники ремкомплекты автозапчасти втулки манжеты авто сельхозтехника ремни клиновые опт</title>
                
                <div className="container">
                    <div className="row">
                        <img src="/static/images/bg_top.jpg"></img>
                    </div>
                    <div className="row td_mid">
                        <div className="col-sm-4">
                            <ul>{menu}</ul>
                        </div>
                        <div className="col-sm-8">
                            {this.props.children}
                            {this.props.children._self.props.page !== 'products' ? null : <ProductList/>}
                        </div>
                    </div>
                </div> 
            
                <style jsx>{`
                    .td_mid{
                    background-image: url('static/images/bg_mid.png');
                    pading: 10px;
                    padding-left: 0px;
                    padding-right: 5px;
                    height:350px;
                    width:768px;
                    }
                `}
                </style>
            </div>
        )
    }
}
