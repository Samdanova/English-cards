import React, {useContext} from 'react';
import {WordContext} from './assets/context/wordContext';

import TableOfWords from './assets/components/TableOfWords';
import SliderCard from './assets/components/sliderCard';
import Header from './assets/components/header';
import Footer from './assets/components/footer';
import NotFoundPage from './assets/components/NotFoundPage';
import AddWord from './assets/components/addWords';

import 'antd/dist/antd.min.css';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
   const {dataWords} = useContext(WordContext);
    return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route
                            path="/game"
                            element={<div className = 'card-container' > <SliderCard></SliderCard>
                        </div>
                            }
                        />
                        <Route 
                            index="index"
                            element={<div className='table-container'><table className = "table" > <thead>
                                <tr className="table__columns">
                                    <th className="table__columns_item" colSpan={1}>English</th>
                                    <th className="table__columns_item" colSpan={1}>Transctiption</th>
                                    <th className="table__columns_item" colSpan={1}>Russian</th>
                                    <th className="table__columns_item" colSpan={1}>Tags</th>
                                    <th className="table__columns_item" colSpan={1}>Action</th>
                                </tr>
                            </thead>
                            <tbody className="table__tbody">
                                {
                                    dataWords.map(
                                        (word) => <TableOfWords key={word.id}
                                            id={word.id}
                                            english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} ></TableOfWords>
                                    )
                                }
                            </tbody>
                        </table>
                        <AddWord></AddWord>
                        </div>
                            }
                        />
                        <Route path="*" element={<NotFoundPage />}/>
                    </Route>
                </Routes>
                <Footer></Footer>
            </div>
        // </Router>
    );
}

export default App;
