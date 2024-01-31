const words = ["hello", "new york", "patna", "delhi", "taj mahal", "ayodhya","agra"];
words.sort();


export function searchData(searchWord){

    const result = [];
    searchWord = searchWord.toLowerCase();
    
        // apply lower bound
        let low = 0, high = words.length - 1;
    
        while(low <= high)
        {
            let mid = Math.floor(low + (high - low)/2);
            if(words[mid] >= searchWord)
            {
                high = mid - 1;
            }
            else low = mid + 1;
        }
        
        
        for(let i = low; i<words.length; i++)
        {
            // console.log(i, "word");
            const res = words[i].slice(0, searchWord.length);
            if(res === searchWord)
            result.push(words[i]);
            else break;
            
        }
        return result;
    
}