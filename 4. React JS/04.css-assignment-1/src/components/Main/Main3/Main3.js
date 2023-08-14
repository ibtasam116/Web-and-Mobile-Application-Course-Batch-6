import React from "react";

import './Main3.css';

// import rectangle1 from '../../images/Rectangle4.png'
// import rectangle2 from '../../images/Rectangle11.png'
// import rectangle3 from '../../images/Rectangle10.png'
// import rectangle4 from '../../images/Rectangle37.png'
// import rectangle5 from '../../images/Rectangle39.png'
// import rectangle6 from '../../images/Rectangle38.png'

export default function Main3() {
    return (
        <main>
            <div className="w-75 m-auto text-center">
                <div className="my-3">
                    <span className="what">What to read next</span>
                </div>

                <div>
                    <div className="row">
                        <div className="col"><img src={rectangle1} alt="Rectangle4" srcset="" /></div>
                        <div className="col"><img src={rectangle2} alt="Rectangle11" srcset="" /></div>
                        <div className="col"><img src={rectangle3} alt="Rectangle10" srcset="" /></div>
                    </div>
                    <div className="row cardText">
                        <div className="col">
                            <p>Connecting artificial intelligence with digital product design</p>
                        </div>
                        <div className="col">
                            <p>Hello world, or, in other words, why this blog exists</p>
                        </div>
                        <div className="col">
                            <p>Here are some things you should know regarding how we work </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"><img src={rectangle4} alt="Rectangle37" srcset="" /></div>
                        <div className="col"><img src={rectangle5} alt="Rectangle39" srcset="" /></div>
                        <div className="col"><img src={rectangle6} alt="Rectangle38" srcset="" /></div>
                    </div>
                    <div className="row cardText">
                        <div className="col">
                            <p>A few words about this blog platform, Ghost, and how this site was made</p>
                        </div>
                        <div className="col">
                            <p>Updating list of 50+ sources on distributed teams, remote work, and how to make it all work
                                better</p>
                        </div>
                        <div className="col">
                            <p>How modern remote working tools get along with Old School Cowboy's methods</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}