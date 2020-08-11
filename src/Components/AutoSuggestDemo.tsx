import React from 'react'

export const AutoSuggestDemo = () => {
    return (
        <div>
            
        </div>
    )
}

// import React ,{useState} from 'react'
// import Autosuggest from 'react-autosuggest'
// import axios from 'axios'

// const  AutoSuggestDemo: React.FC = ()=> {
//     const [country,setCountry]=useState('')
//     const [suggestions,setSuggestions]=useState<string[]>([])
//     return (
//         <div >
//             <h1>Autosuggest dropdown!!!</h1>
//             <Autosuggest 
//                 suggestions={suggestions}
//                 inputProps={{
//                     placeholder:'search here...',
//                     value:country,
//                     id: 'country',
//                     name: 'country',
//                     onChange: (_event ,{newValue})=>{
//                         setCountry(newValue)
//                     }
//                 }}
//                 onSuggestionsFetchRequested={ async ({value})=>{
//                     if(!value){
//                         setSuggestions([])
//                         return ;
//                     }
//                     try{
//                         const result = await axios.get(`https://restcountries.eu/rest/v2/name/${value}`)
//                         console.log(result.data)
//                         setSuggestions(
//                            result.data.map(row => ({
//                             name : row.name,
//                             flag :row.flag
//                         }))
//                         )
//                     }catch(e){
//                         setSuggestions([])
//                     }
//                 }}
//                 onSuggestionsClearRequested={ ()=>{
//                     setSuggestions([])
//                 }}
//                 onSuggestionSelected={( event , {suggestion, method})=>{
//                     if(method==='enter'){
//                         event.preventDefault()
//                     }
//                 }}
//                 getSuggestionValue={ (suggestion)=> suggestion.name}
//                 renderSuggestion={ suggestion => <div>{suggestion.name}</div>}
//             />
//         </div>
//     )
// }
// export default AutoSuggestDemo


   
