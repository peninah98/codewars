export function countSmileys(arr: string[]) {
           
    return arr
      .filter((element)=>[':)',';)',':-)',':D',';D',':-D',';-D',';~D',':~D',':~)',';~)', ';-)'].includes(element)).length
      
  }