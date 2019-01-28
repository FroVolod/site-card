import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


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
                <li key={id}>
                    <Link href={`/?page=${slug}`}>
                        <a>{title}</a>
                    </Link>
                </li>
            ))
        }
        return (
            <div>
                <title>Авторезинотехника РТИ Лоск Харьков Украина резинотехнические изделия сальники ремкомплекты автозапчасти втулки манжеты авто сельхозтехника ремни клиновые опт</title>
                <h1>Авторезинотехника</h1>
                <ul>{menu}</ul>
                {this.props.children}
            </div>
        )
    }
}
