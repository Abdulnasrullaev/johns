import React from 'react';
import {About, Details, NavBar} from "./styles";

const Home = () => {
    return (
        <>
            <NavBar>
                <p>
                    John Smith
                </p>
            </NavBar>
            <About>
                <p>
                    I'm John. <br/>
                    I build beautiful responsive websites
                    <div className='buttons'>
                        <button>
                            view portfolio
                        </button>
                        <button>
                            hide me
                        </button>
                    </div>
                </p>

            </About>
            <Details>
                <p className='help'>
                    I can help
                </p>
                <div className='degree'>
                    <p className='lorem'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Suspendisse varius enim in eros
                        elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor
                        interdum nulla, ut commodo diam
                        libero vitae erat. Aenean faucibus
                        nibh et justo cursus id rutrum lorem
                        imperdiet. Nunc ut sem vitae risus
                        tristique posuere.
                    </p>
                    <div className='degrees'>
                        <p className='web'>
                            web design
                        </p>
                    </div>
                    <div className='degrees'>
                        <p className='responsive'>
                            responsive design
                        </p>
                    </div>
                    <div className='degrees'>
                        <p className='ui'>
                            ui design
                        </p>
                    </div>
                    <div className='degrees'>
                        <p className='mobile'>
                                 mobile apps
                        </p>
                    </div>
                </div>
            </Details>
        </>
    );
};

export default Home;