
// <script>-
//   async function get_data(dir_) {
//
//      var test = await pfs.readdir(dir_);
//      console.log(dir_)
//      console.log(test);
//     let commits = await git.log({
//       fs, depth:100,
//       dir: dir_,
//       ref: 'master'
//     });
//     var curated_data = {};
//     var node = [];
//     var edge = [];
//     for (var i = 0; i < commits.length; i++) {
//       node.push({"id":commits[i]["oid"],"label":commits[i]["commit"]["author"]["name"]});
//       for(var j = 0 ; j < commits[i]["commit"]["parent"].length; j++){
//         edge.push({"to":commits[i]["commit"]["parent"][j],"from":commits[i]["oid"]});
//       }
//     }
//     let data ={"nodes":node,"edges":edge};
//     return data
//       };
// import http from 'https://unpkg.com/isomorphic-git@beta/http/web/index.js'
//
// window.fs = new LightningFS('fs', { wipe: true });
// window.pfs = window.fs.promises
// let repo = "https://github.com/30-seconds/30-seconds-of-code";
// var dir_="/"+ repo.split("/").slice(3, 4).join("/").replace("-","") ;
//
// window.dir = dir_;
//           // window.dir ="/live-gitframed";
//       // I prefer using the Promisified version honestly
//       // var dir_="/"+ repo.split("/").slice(3, 4).join("/").replace("-","") ;
//       //
//       // window.dir = dir_;
//       // console.log(repo);
//       // let repo = 'https://github.com/isomorphic-git/isomorphic-git';
//       // https://github.com/30-seconds/30-seconds-of-code
//        // var test = await pfs.readdir(dir_);
//       try {
//         await pfs.mkdir(dir_);
// } catch (error) {
//   console.log("error mkdir");
//   console.error(error);
//   // expected output: ReferenceError: nonExistentFunction is not defined
//   // Note - error messages will vary depending on browser
// }
// try {
//   let test = await pfs.readdir(dir_);
//   console.log("read_dir before clone");
//
//   console.log(test);
// } catch (error) {
// console.log("error readdir");
// console.error(error);
// // expected output: ReferenceError: nonExistentFunction is not defined
// // Note - error messages will vary depending on browser
// }
// try{
//   console.log(dir_);
//
//   await git.clone({
//     fs,
//     http,
//     dir_,
//     url:"https://github.com/30-seconds/30-seconds-of-code" ,
//     corsProxy: 'https://cors.isomorphic-git.org',
//     ref: 'master',
//     singleBranch: true,
//     depth: 100,
//     noGitSuffix: true
//
//   });
//   await git.clone({
//   fs,
//   http,
//   dir: dir_,
//   corsProxy: 'https://cors.isomorphic-git.org',
//   url: 'https://github.com/isomorphic-git/isomorphic-git',
//   singleBranch: true,
//   depth: 1
// })
// } catch(error){   console.log("error git clone");
// console.log(error);}
//
// try {
//   let test = await pfs.readdir(dir_);
//   console.log("read_dir after clone");
//
//   console.log(test);
// } catch (error) {
// console.log("error readdir");
// console.error(error);
// // expected output: ReferenceError: nonExistentFunction is not defined
// // Note - error messages will vary depending on browser
// }
      // await pfs.readdir(dir_);


// console.log("debbug");
//
//         get_data(dir_).then(data => {
//           console.log(data);
//           var chart = anychart.graph(data);
//           // set the title
//           chart.title(repo);
//           // draw the chart
//           chart.container("container").draw();
//
//         }).catch(error => { console.log(error); });
//
//
//     // Initialize isomorphic-git with a file system
//
//     window.addEventListener("load", function() {
//       document.getElementById('git_url_form').addEventListener("submit", function(e) {
//         e.preventDefault(); // before the code
//         git_watch(e.target.git_url.value);
//         // console.log(e.target.git_url.value);
// //         let form = event.target;
// //         const formData = new FormData(this);
// //
// // for (const formElement of formData) {
// //   console.log(formElement);
// // }
// //         /* do what you want with the form */
// //         // var formData = new FormData(document.querySelector('form'))
// //         // Should be triggered on form submit
// //         console.log(e);
// //         console.log(form.git_url);
//       })
    // });
  // </script>
