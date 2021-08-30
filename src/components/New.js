import React, { Component } from 'react'
import NewsComponent from './NewsComponent';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class New extends Component {
    articles = []
    
    static defaultProps = {
        category: "general"
    }
    constructor() {
        super()
        // let {category}=this.props;
        this.state = {
            articles: this.articles,
            page: 1,
            loading: false,



        }

        // this.handleNext=this.handleNext.bind(this)
    }
    fetchMoreData = async () => {
        let { pageSize, category, page,setProgress } = this.props;
        setProgress(10)

        console.log(this.state.page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf2247110f51488bb8c1561149bf471b&7D&category=${category}`
        setProgress(40)

        let data = await (await fetch(url)).json()
        // console.log(data.articles);

        this.setState({
            page: this.state.page + 1,
            articles: this.state.articles.concat(data.articles)
        })
        setProgress(100)

    }
    handleNext = async () => {
        // this.handleNext=this.handleNext.bind(this)
        let { pageSize, category, page } = this.props;
        // let { pageSize } = this.props;
        this.setState({

            page: this.state.page + 1
        })
        console.log(this.state.page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf2247110f51488bb8c1561149bf471b&7D&category=${category}&pageSize=${pageSize + 1}&page=${page}`

        let data = await (await fetch(url)).json()
        // console.log(data.articles);

        this.setState({
            page: this.state.page + 1,
            articles: data.articles
        })




    }
    handlePrevious = async () => {
        let { pageSize, category, page } = this.props;

        console.log(this.state.page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf2247110f51488bb8c1561149bf471b&7D&category=${category}&pageSize=${pageSize - 1}&page=${page}`

        let data = await (await fetch(url)).json()
        // console.log(data.articles);

        this.setState({
            page: this.state.page - 1,
            articles: data.articles
        })
    }
    async componentDidMount() {

        
        let { pageSize, category,setProgress } = this.props;

        setProgress(10)
        console.log(category);

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cf2247110f51488bb8c1561149bf471b&7D&category=${category}`
        setProgress(40)

        let data = await (await fetch(url)).json()
        setProgress(80)
        // console.log(data.articles);

        this.setState({
            articles: data.articles
        })
        setProgress(100)


    }

    componentDidUpdate = () => {
        if (this.props.category == "business") {
            console.log("business1");
            this.category = "business"
        }
    }


    render() {


        // if (this.state.articles==null){

        // }
        let { pageSize } = this.props;



        return (
            <>
                <div className="container" style={{ }}>


                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        style={{display: "flex", flexDirection: "row", flexWrap: "wrap" }}
                        loader={<h4><Spinner /></h4>}
                    >
                        {this.state.articles.map((elm) => {
                            return (
                                <>
                                    <NewsComponent imgUrl={elm.urlToImage} title={elm.title} desc={elm.urlTo} publishedAt={elm.publishedAt} key={elm.urlTo} />

                                </>
                            )
                        })}

                    </InfiniteScroll>
                </div>
            </>




        )
    }
}

export default New
