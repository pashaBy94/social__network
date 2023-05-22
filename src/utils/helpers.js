import { useLocation, useNavigate, useParams } from "react-router-dom";

export const followUnfollowHelper = (users, id, desc)=>{
  let el = users.find(us=>us.id === id);
            el.followed = desc;
}
export const listComponentWriteDialog = (list, Elem)=> list.map(us=> <Elem id={us.id} title={us.name} key={us.id}/>);

export const listComponentWriteMessag = (list, Elem)=> list.map(el=> <Elem messag={el.messag} key={el.id}/>);

export const listComponentWriteFriends = (list, Elem)=> list.map(el=> <Elem key={el.id} name={el.name} id={el.id} imag={el.img}/>);

export const listComponentWritePosts = (list, Elem)=> list.postsData.map(el=> <Elem post={el.post} id={el.id} likescount={el.likescount} postsDelete={list.postsDelete} key={el.id}/>);

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}