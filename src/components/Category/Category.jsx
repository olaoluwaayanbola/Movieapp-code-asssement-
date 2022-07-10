import './Category.scss'
const Category = ({ data, titledata, titledata2, search }) => {
    const newdata = titledata?.results.filter(data => {
        if (search.toLowerCase() == data?.title.toLowerCase()) {
            return data
        }
    })
    const newdata2 = titledata2?.results.filter(data => {
        if (search.toLowerCase() === data?.title.toLowerCase()) {
            return data
        }
    })
    console.log(newdata?.results)
    return (
        <div className='category-container'>
            <h5>
                {data}
            </h5>
            <div className="Movie-box-container" >
                {data === 'Adventure' ?
                    (newdata?.length === 0 ? (titledata?.results) : newdata)?.map((data) => {
                        return <div key={data.imdb_id} className="Movie-box">
                            <h4>{data.title}</h4>
                        </div>
                    }) :
                    (newdata2?.length === 0 ? titledata2?.results : newdata2)?.map((data) => {
                        return <div key={data.imdb_id} className="Movie-box">
                            <h4>{data.title}</h4>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Category