import Layout from '../components/layout'
// import fetch from 'isomorphic-unfetch'


class Index extends React.Component {
    state = { dataPage: null }

    static /*async*/ getInitialProps({ query: { page } }) {
        if (page === undefined) {
            page = 'main'
        }
        // const resPage = await fetch(`http://127.0.0.1:9000/api/auto-rti/${page}`)
        // const dataPage = await resPage.json()
        return {
            page,
            //dataPage,
        }
    }
    
    fetchPage = () => {
        fetch(`http://127.0.0.1:9000/api/auto-rti/${this.props.page}`)
            .then((resPage) => resPage.json())
            .then((dataPage) => {
                this.setState({ dataPage })
            })
    }

    componentDidMount() {
        this.fetchPage()
    }

    componentDidUpdate(prevProps) {
        if (this.props === prevProps) {
            return
        }
        this.fetchPage()
    }    

    render() {
        return (
            <Layout>
                <div>
                    {this.state.dataPage === null ? null : this.state.dataPage.body}
                    {/* {this.props.dataPage.body} */}
                </div>
            </Layout>
        )
    }
}

export default Index