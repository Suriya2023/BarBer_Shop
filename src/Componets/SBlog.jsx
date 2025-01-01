import React from 'react'
import './SBlog.css'
import Footer from './Footer'


function SBlog() {
    return (
        <div>
            <section className='thisblogmaint' id='maxsdf'>
                <div className="gridsection">
                    <div className="mainsblog">
                        <ul>
                            <li>
                                <div className='haircutbtn'>
                                    <button>
                                        Haircut

                                    </button>
                                </div>
                            </li>
                            <li>
                                <li class="manyaree"><div class="commentss"><p>March 5,2024 </p></div><h3>Men's Fade Haircut - The Tips And Tricks Every Man Should...</h3><p class="myptag">Running your own business in the hair and beauty industry can be tough, with everything from finances to marketing, and team management to consider. Here, Booksy Ambassador, Ruger Barber Director and...</p><span class="readtext">Read More <i class="fa-solid fa-arrow-right"></i></span></li>
                            </li>
                        </ul>
                    </div>
                    {/* next column */}
                    <div className="mainsblogt">
                        <div className="maincater">
                            <div>
                                <h3 className='esdessh'>CATEGORIES</h3>
                                <div className='hr'></div>
                                <div className='Equipmentaawqwq'>
                                    <div className='awsaww'>Equipment</div>
                                    <div className='asdf'>4</div>
                                </div>
                                <br />
                                <div className='Equipmentaawqwq'>
                                    <div className='awsaww'>    Hair styles</div>
                                    <div className='asdf'>5</div>
                                </div>
                                <br />
                                <div className='Equipmentaawqwq'>
                                    <div className='awsaww'>Tips</div>
                                    <div className='asdf'>5</div>
                                </div>
                                <br />
                                <div className='Equipmentaawqwq'>
                                    <div className='awsaww'>Tools</div>
                                    <div className='asdf'>3</div>
                                </div>
                                <br />
                                <h3 className='esdessh'>ARCHIVES</h3>
                                <div className='hr'></div>
                                <div className='Equipmentaawqwq'>
                                    <div className='awsaww'>May 2023</div>
                                    <div className='asdf'>14</div>
                                </div>
                                <br />
                                <h3 className='esdessh'>POPULAR TAGS</h3>
                                <div className='hr'></div>
                                <br />
                                <div className="boxssml">
                                    <div className="boxdl">Barber</div>
                                    <div className="boxdl">Beard</div>
                                    <div className="boxdl">Care</div>
                                    <div className="boxdl">Shave</div>

                                    <div className="boxdl">Hair</div>
                                    <div className="boxdl">Tools</div>
                                    <div className="boxdl">Accessories</div>

                                    <div className="boxdl">Trimming</div>
                                    <div className="boxdl">Mustache</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* seccond */}
                <div className="gridsection">
                    <div className="mainsblog2">
                        <ul>
                            <li>
                                <div className='haircutbtn'>
                                    <button>
                                        Haircut

                                    </button>
                                </div>
                            </li>
                            <li>
                                <li class="manyaree"><div class="commentss"><p>March 5,2024 </p></div><h3>The Evolution of The Best Men's Hair Design Trend Today</h3><p class="myptag">Running your own business in the hair and beauty industry can be tough, with everything from finances to marketing, and team management to consider. Here, Booksy Ambassador, Ruger Barber Director and...</p><span class="readtext">Read More <i class="fa-solid fa-arrow-right"></i></span></li>
                            </li>
                        </ul>
                    </div>
                    {/* next column */}
                    <div className="mainsblogt">
                        <div className="maincater">
                            <div className='Achivment'>
                                <h3 className='esdessh'>GALLERY</h3>
                                <div className='hr'></div>
                                <br />

                                    <section className="mainimg">
                                            <img src={require('./Image/IMG 1.png')} alt></img>
                                            <img src={require('./Image/IMG 2.png')} alt></img>
                                            <img src={require('./Image/IMG 3.png')} alt></img>
                                            <img src={require('./Image/IMG 4.png')} alt></img>
                                            <img src={require('./Image/IMG 5.png')} alt></img>
                                            <img src={require('./Image/IMG 6.png')} alt></img>
                                    </section>
                            </div>
                        </div>
                    </div>
                </div>
                {/* third */}
                <div className="gridsection">
                    <div className="mainsblog3">
                        <ul>
                            <li>
                                <div className='haircutbtn'>
                                    <button>
                                        Haircut

                                    </button>
                                </div>
                            </li>
                            <li>
                                <li class="manyaree"><div class="commentss"><p>March 5,2024 </p></div><h3>Learn How To Communicate With Your Item to Customer...</h3><p class="myptag">Running your own business in the hair and beauty industry can be tough, with everything from finances to marketing, and team management to consider. Here, Booksy Ambassador, Ruger Barber Director and...</p><span class="readtext">Read More <i class="fa-solid fa-arrow-right"></i></span></li>
                            </li>
                        </ul>
                    </div>
                    {/* next column */}
                    <div className="mainsblogt">
                        <div className="maincater">
                            <div className='Achivment'>
                                <h3 className='esdessh'>GALLERY</h3>
                                <div className='hr'></div>
                                <br />

                                    <section className="mainimg">
                                            <img src={require('./Image/IMG 1.png')} alt></img>
                                            <img src={require('./Image/IMG 2.png')} alt></img>
                                            <img src={require('./Image/IMG 3.png')} alt></img>
                                            <img src={require('./Image/IMG 4.png')} alt></img>
                                            <img src={require('./Image/IMG 5.png')} alt></img>
                                            <img src={require('./Image/IMG 6.png')} alt></img>
                                    </section>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Footer/>
        </div>
    )
}

export default SBlog
