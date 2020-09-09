import React from 'react';
import Base from './Base';
import { isAuthenticated } from './helper/apicalls';
import Moneytransfer from './Moneytransfer';


export default function Home() {

  
  return (
    <>
    <Base title="ReActive Bank" description="Welcome">
      { !isAuthenticated() && (<div className="row text-center">
        <div>
        <h3 className="text-white mb-2">Please sign up or sign in first to tranfer money to another account</h3>
        
        </div>
        <div className="row">
        </div>
      </div>)}
      
      { isAuthenticated() && (<div >
        <Moneytransfer/>
      </div>)}
    </Base>

    
    </>
  );
}
