import React, { useState } from 'react';


const Searchpage = (props) => {
    console.log(props.img.Images.results);
    const [search, setsearch] = useState('');
    const [info, setinfo] = useState('');
    const [upper, setupper] = useState(0);
    const [lower, setlower] = useState(12);
    const [boo, setboo] = useState(true);

    const trigger = () => {
        if (search === '') {
            props.ser('random');
            setinfo('Random')
        }
        else {
            props.ser(search)
            setinfo(search.charAt(0).toUpperCase() + search.slice(1));
        }
    }
    const changer = (k) => {
        setsearch(k);
        setupper(0);
        setlower(12);
        setboo(true);
    }
    const uplow = () => {
        setlower(lower + 12);
        if (lower > props.img.Images.results.length) {
            setboo(false);
        }
    }
    return (
        <div className="background">
            <div className="container">
                <div className="gap"></div>
                <div className="row">
                    <div className="col-md-8 offset-md-0">
                        <input
                            style={{ marginLeft: '15px' }}
                            type='text'
                            className='search'
                            placeholder='Search for photos...'
                            value={search}
                            // eslint-disable-next-line no-sequences
                            onChange={(e) => changer(e.target.value)}
                        />
                    </div>

                    <div className="offset-md-2 col-md-2">
                        <button type="button" style={{ width: '79.5px', height: '44px', marginLeft: '100px' }} onClick={trigger} className="btn btn-dark"><div className="fa fa-search"></div></button>
                    </div>
                </div>

                <div className="gap2"></div>
                <div className="row">
                    {props.img.Images.results !== undefined ? <div style={{ fontSize: '23px', paddingLeft: '27px' }}><strong style={{ fontSize: '23px' }}>{info}</strong> <br />{props.img.Images.results.length} images found...</div> : null}
                </div>
                <div className="gap2"></div>
                <div className="row">
                    {props.img.Images.results !== undefined ? props.img.Images.results.slice(upper, lower).map(photo => {
                        return (<div className="col-md-3"> <img className="diff" src={photo.urls.thumb} alt={photo.id} width="300"
                            height="200"></img></div>)
                    }) : null}
                </div>
                <div className="row justify-content-center">
                    {props.img.Images.results !== undefined && boo ? <button type="button" style={{ width: '90px', height: '44px', marginLeft: '50px' }} onClick={uplow} className="btn btn-dark"><div>Load More</div></button> : null}
                </div>
                <div className="gap2"></div>
                <div className="gap2"></div>
            </div>
        </div>
    )
}

export default Searchpage;