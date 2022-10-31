import React from "react";
// import '../../App.css';
import '../styles/booking.css';
export default function Products() {
    return <div classNameName='products'>
<div className="wrap" data-pos="0">
    <div className="headbar">
      <i className="zmdi zmdi-arrow-left btnBack"></i> <span>Flight Booking App</span>
    </div>
    <div className="header">
      <div className="bg"></div>
      <div className="filter"></div>
      <div className="title">
        <div className="fromPlace">
          <span>D</span><span>U</span><span>B</span>
        </div>
        <span className="separator"><i className="zmdi zmdi-airplane"></i></span>
        <div className="toPlace">
          <span>M</span><span>R</span><span>S</span>
        </div>
      </div>
      <div className="map"></div>
    </div>

    <div className="content">
      <section>
        <div className="form">
          <div className="control select">
            <div className="control-head">
              <i className="zmdi zmdi-flight-takeoff"></i>
              <span className="close"><i className="zmdi zmdi-close"></i></span>
              <div>
                <h6>From</h6>
                <span className="airport-name" data-role="from">DUB, Dublin Airport</span>
              </div>      
            </div>
            <div className="control-body">
              <ul className="select-index"></ul>
              <div className="nano">
                  <div className="nano-content">
                    <ul className="select-data"></ul>
                  </div>
              </div>
            </div>
          </div>
          <div className="control select">
            <div className="control-head">
              <i className="zmdi zmdi-flight-land"></i>
              <span className="close"><i className="zmdi zmdi-close"></i></span>
              <div>
                <h6>To</h6>
                <span className="airport-name" data-role="to">MRS, Marseille Provence Airport</span>
              </div>      
            </div>
            <div className="control-body">
              <ul className="select-index"></ul>
              <div className="nano">
                  <div className="nano-content">
                    <ul className="select-data"></ul>
                  </div>
              </div>
            </div>
          </div>
          <div className="control dateinput">
            <div className="control-head">
              <i className="zmdi zmdi-calendar"></i>
              <span className="close"><i className="zmdi zmdi-close"></i></span>
              <div className="control-item">
                <h6>Depar</h6>
                <span>MON, 8 May</span>
              </div>
              <div className="control-item">
                <h6>Return</h6>
                <span>One Way</span> 
              </div>
            </div>
            <div className="control-body">
              <div className="info-message">
                <i className="zmdi zmdi-info"></i>
                {/* <!-- <span>Select the depar date then the return date if you need a round trip ticket</span> --> */}
                <span>By the moment theres only One Way tickets, thanks.</span>
              </div>
              <div className="calendar">
                <div className="month">
                  <i className="zmdi zmdi-chevron-left"></i>
                  <span>May</span>
                  <i className="zmdi zmdi-chevron-right"></i>
                </div>
                <div className="week">
                  <span>S</span>
                  <span>M</span>
                  <span>T</span>
                  <span>W</span>
                  <span>T</span>
                  <span>F</span>
                  <span>S</span>
                </div>
                <div className="days"></div>
              </div>
            </div>
          </div>
          <div className="control radio passengers">
            <i className="zmdi zmdi-accounts"></i>
            <div className="control-item">
              <h6>Passengers</h6>
              
                <input type="radio" name="passengers" value="0" />
                <div><span>1</span>&times;<i className="zmdi zmdi-male-alt"></i><small>Adults</small></div>
              
                <input type="radio" name="passengers" value="1"/>
                <div><span>0</span>&times;<i className="zmdi zmdi-face"></i><small>Kids</small></div>
              
                <input type="radio" name="passengers" value="2"/>
                <div><span>0</span>&times;<i className="zmdi zmdi-walk"></i><small>Elders</small></div>
            </div>
            <section className="spinner">
              <button data-action="plus"><i className="zmdi zmdi-plus"></i></button>
              <button data-action="minus"><i className="zmdi zmdi-minus"></i></button>
            </section>
          </div>
          <div className="control radio">
            <i className="zmdi zmdi-airline-seat-recline-extra"></i>
            <div className="control-item">
              <h6 style={{marginBottom: "8px"}}>className</h6>
              
                <input type="radio" name="seat" value="Economy" />
                <span>Economy</span>
              
                <input type="radio" name="seat" value="Business"/>
                <span>Business</span>
              
                <input type="radio" name="seat" value="First className"/>
                <span>First className</span>
            </div>
          </div>
          <div className="control">
            <button className="btnSearch">Search Flights</button>
          </div>

        </div>
        <div className="list">
          <div className="nano">
              <div className="nano-content">
                        
              </div>
          </div>          
        </div>
        
        <div className="ticket">
          <section>
            
          </section>
          <button className="btnBook">BOOK FLIGHT</button>
         
          <div className="loader">Loading...</div>
        </div>

      </section>
    </div>    
  
  </div>





    </div>
}