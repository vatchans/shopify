import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Star from "./Star";
import { useState } from "react";
function App() {
    const [cart, setcart] = useState(0)
    const [toggle, settoggle] = useState(true)
    const [toggle1, settoggle1] = useState(true)
    const [toggle2, settoggle2] = useState(true)
    const [toggle3, settoggle3] = useState(true)
    const [toggle4, settoggle4] = useState(true)
    const [toggle5, settoggle5] = useState(true)
    const [toggle6, settoggle6] = useState(true)
    const [toggle7, settoggle7] = useState(true)

    return <>
        <Navbar data={cart} />
        <Header></Header>
        <> <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">Fancy Product</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <Star />
                                    </div>
                                    $40.00 - $80.00
                                </div>
                            </div>

                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle(!toggle) }}>Add to cart</button>
                                            : 
                                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle(current => !current) }}>Remove</button>
                                    }
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>Sale</div>
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Special Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <Star />
                                        </div>

                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle1 ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle1(!toggle1) }}>Add to cart</button>
                                            : 
                                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle1(current => !current) }}>Remove</button>
                                    }
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>Sale</div>
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <Star />
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle2 ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle2(!toggle2) }}>Add to cart</button>
                                            : 
                                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle2(current => !current) }}>Remove</button>
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <Star />
                                        </div>
                                        $40.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                       
                                         {
                                            toggle7 ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle7(!toggle7) }}>Add to cart</button>
                                                : 
                                            <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle7(current => !current) }}>Remove</button>
                                        }
                                       
                                       </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>Sale</div>
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sale Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <Star />
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                        $25.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle3 ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle3(!toggle3) }}>Add to cart</button>
                                            : 
                                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle3(current => !current) }}>Remove</button>
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Fancy Product</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <Star />
                                        </div>
                                        $120.00 - $280.00
                                    </div>
                                </div>

                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    { toggle4 ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle4(!toggle4) }}>Add to cart</button>
                                            : 
                                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle4(current => !current) }}>Remove</button>
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{ "top": "0.5rem", "right": "0.5rem" }}>Sale</div>
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Special Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <Star />
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                        $18.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle5 ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle5(!toggle5) }}>Add to cart</button>
                                            : 
                                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle5(current => !current) }}>Remove</button>
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card h-100">
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Popular Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <Star />
                                        </div>
                                        $40.00
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {
                                        toggle6 ?<button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart + 1); settoggle6(!toggle6) }}>Add to cart</button>
                                            : 
                                        <button className="btn btn-outline-dark mt-auto" onClick={() => { setcart(cart - 1); settoggle6(current => !current) }}>Remove</button>
                                    }
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section></>
        <Footer></Footer>
    </>

}

export default App;

