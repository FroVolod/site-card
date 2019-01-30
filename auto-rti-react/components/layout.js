import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class extends React.Component {
    state = { dataListPage: null }

    componentDidMount() {
        fetch(`http://127.0.0.1:9000/api/auto-rti/`)
            .then((resListPage) => resListPage.json())
            .then((dataListPage) => {
                this.setState({ dataListPage })
            })
    }
    
    render() {
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
                        border: #000000 1px dashed;
                        padding: 4px;
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
                    <img src="/static/images/bg_top.jpg"></img>
                    <div className="row td_mid">
                        <div className="col-sm-5">
                            <ul>{menu}</ul>
                        </div>
                        <div className="col-sm-7">
                            {this.props.children}
                        </div>
                    </div>
                </div>                
            
                <style jsx>{`
                    .td_mid{
                    background-image: url('static/images/bg_mid.png');
                    pading: 0px;
                    padding-left: 10px
                    }
                `}
                </style>
            </div>
        )
    }
}
