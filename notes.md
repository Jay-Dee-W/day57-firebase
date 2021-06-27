state to be stored in redux // added to firebase at later point
    - company
    - person
        - add seperate reducers / actions for each

components
    - Main = HomePage
        -> Companies
            -> ListCompaines => reads from redux companies state to load all companies
                - Route Link to DetailsPage
        -> Company => write to redux companies state to add a company
        -> Person => write to redux person state to add a person =? person object has cross-referance to a company object ?

    - Details = DetailsPage
        -> Profile = Profile Overview => display company object of from ListCompanies clicked on above.
        -> Employess = Employees => display list of person objects that have refrance to current company

all Css in index.css
    - create styles for default types and apply accross all components
    - upgrade to MaterialUi