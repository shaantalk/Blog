// import React from "react";
// import { Redirect } from "react-router-dom";
// // import Markdown from "react-markdown";
// import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";
// import postlist from "../Content/Data/Blogs.json";
// import "../Styles/MarkdownRenderer.css";

// const MarkdownRenderer = props => {
//   const validId = props.match.params.id;
//   if (!validId) {
//     // console.log("Post ID : Invalid");
//     return <Redirect to='/404' />;
//   }
//   const fetchedPost = {};
//   let postExists = false;
//   postlist.forEach((post, i) => {
//     if (validId === post.id) {
//       fetchedPost.title = post.title ? post.title : "No title given";
//       fetchedPost.date = post.date ? post.date : "No date given";
//       fetchedPost.author = post.author ? post.author : "No author given";
//       fetchedPost.content = post.content ? post.content : "No content given";
//       postExists = true;
//     }
//   });
//   if (postExists === false) {
//     // console.log("Post ID : Don't exists", validId);
//     return <Redirect to='/404' />;
//   }
//   return (
//     <div className='post'>
//       <h2>{fetchedPost.title}</h2>
//       <small>
//         Published on {fetchedPost.date} by {fetchedPost.author}
//       </small>
//       <hr />
//       {/* <Markdown
//         source={fetchedPost.content}
//         escapeHtml={false}
//         className='markdown_container'
//       /> */}
//       <ReactMarkdown
//         plugins={[gfm]}
//         children={fetchedPost.content}
//         className='markdown_container'
//         linkTarget='_blank'
//         allowDangerousHtml={true}
//       />
//     </div>
//   );
// };

// export default MarkdownRenderer;
