function App(){
    return(<div> 
        <div id="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <TopNav />
                <SideNav />
          </nav>
  
          <div id="page-wrapper">
  
              <div className="container-fluid">
  
                  
                  <div className="row">
                      <div className="col-lg-12">
                          <h1 className="page-header">
                              Dashboard <small>Statistics Overview</small>
                          </h1>
                          <ol className="breadcrumb">
                              <li className="active">
                                  <i className="fa fa-dashboard"></i> Dashboard
                              </li>
                          </ol>
                      </div>
                  </div>
                  <div className="row">
                        <Comments newComments="New Comments!" />
                        <Tasks newTasks="New Tasks!" />
                        <Orders newOrders="New Orders!" />
                        <Tickets newTickets="New Tickets!" />
                  </div>
                        <AreaChart />
                  <div className="row">
                        <DonutChart />
                      <div className="col-lg-4">
                            <TasksPanel />
                      </div>
                      <div className="col-lg-4">
                            <TransactionsPanel />
                      </div>
                  </div>
                  
  
              </div>
              
  
          </div>
          
  
      </div>
      </div>)
}