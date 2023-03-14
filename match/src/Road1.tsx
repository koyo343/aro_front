import { Link } from "react-router-dom"
//import Loader from 'react-loader-spinner'

export const Road1 = () => {
    return (
        <main>
            <h1>Now Roading...</h1>
            <Link to="/">Homeへ</Link>
        </main>
    )
}

// function Spinner() {
//     return (
//       <div className="sk-plane sk-center"></div>
//     )
// }

// class App extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         loading: false
//       }
//     }
//     componentDidMount() {
//         // あえてローディング（スピナー）を表示するため5秒待機
//         // 5秒後loadingのStateをTrueに変更
//         setTimeout(()=>this.setState({loading: true}), 5000);
//     }
//       render () {
//         return (
//           <div>
//             {this.state.loading ? (<Road1/>) : (<Spinner/>) }
//           </div>
//         )
//     }
// }
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );