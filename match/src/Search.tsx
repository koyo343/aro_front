import { Button } from "@mui/material";
import Select from 'react-select';
import React, { useState } from "react";

const options = [
    { value: 'Assembly', label: 'Assembly' },
    { value: 'BASIC', label: 'BASIC' },
    { value: 'C', label: 'C' },
    { value: 'C#', label: 'C#' },
    { value: 'C++', label: 'C++' },
    { value: 'COBOL', label: 'COBOL' },
    { value: 'CSS', label: 'CSS' },
    { value: 'D', label: 'D' },
    { value: 'Dart', label: 'Dart' },
    { value: 'Elixir', label: 'Elixir' },
    { value: 'F#', label: 'F#' },
    { value: 'Go', label: 'Go' },
    { value: 'Google App Script', label: 'Google App Script' },
    { value: 'Groovy', label: 'Groovy' },
    { value: 'HTML', label: 'HTML' },
    { value: 'Haskell', label: 'Haskell' },
    { value: 'Java', label: 'Java' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Kotlin', label: 'Kotlin' },
    { value: 'Lua', label: 'Lua' },
    { value: 'Objective-C', label: 'Objective-C' },
    { value: 'Java', label: 'Java' },
    { value: 'PHP', label: 'PHP' },
    { value: 'Perl', label: 'Perl' },
    { value: 'Python', label: 'Python' },
    { value: 'R', label: 'R' },
    { value: 'Ruby', label: 'Ruby' },
    { value: 'Rust', label: 'Rust' },
    { value: 'SQL', label: 'SQL' },
    { value: 'Scala', label: 'Scala' },
    { value: 'Swift', label: 'Swift' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'VB Script', label: 'VB Script' },
    { value: 'VHDL', label: 'VHDL' },
    { value: 'Verilog', label: 'Verilog' },
    { value: 'VisualBasic', label: 'VisualBasic' },
    { value: 'VisualBasic.NET', label: 'VisualBasic.NET' },
    ]

export const Search = () => {
    
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<any>(null); // 初期値はnull

    const handleSelectChanged = (selectedOption: any) => {
        setSelectedOption(selectedOption);
        setSearchQuery(selectedOption?.value || ""); // 選択された値がnullまたはundefinedでない場合に、valueをsearchQueryに設定する
      };

    const handleButtonClicked = () => {
       
        //selectedOption.forEach((elm: { [x: string]: any; }) => console.log(elm["value"]));
        
        console.log( selectedOption.map((elm: { [x: string]: any; }) => { return elm['value'] }).join('&') );
        
        window.location.href = `https://youtube.com/results?search_query=${selectedOption.map((elm: { [x: string]: any; }) => { return elm['value'] }).join(',')}`;
    };

    return (

        <main>
            <h1>Hello Your World</h1>
            <Button variant="contained" href="/">
            HOMEに戻る
            </Button>

            <div>
            <Select isMulti isSearchable name="language" options={options} value={selectedOption} onChange={handleSelectChanged}/>
                <button onClick={handleButtonClicked}>Submit</button>
            </div>

        </main>
    )
}
