* Navbar 
  * index
  * logo
  * login/signup
  * user profile
  

the landing page will be a modal explaing the site
* Vertical dispaly of websites(ferris wheel)
* bio
* authors infos footer of modal  
  

  state schema

  ```js
  {
    entities{
      users:{
        1:{
          email:Anoush@anoush.anoush,
          password:anoush
        },
        2:{
          email:tom@tom@tomp,
          password: driscoll
        }
      },
      document:{
        1:{
          user_id: 1,
          body: "<div></div>"  //will be a text database level 
        }
      }
      
      tools:{
        1:{
          backgroundColor:
          font:

        }
      }
    }
  }


  // on update when user cahanges input containers re-renders 
  //interpolate user input fields into html inline styling 
  // on save serailize tools 
  // style on state ui dispatches change to style
  // elements will have properties 
  // elements will all be thier own component that will then be changable depending on tools and 
  // element and style relationship 
  // element on state with its info 