export default function copyText(cop_str) {
     const input = document.createElement('input');
     document.body.appendChild(input);
     input.setAttribute('value', cop_str);
     input.select();
     try{
        document.execCommand('copy');
     }catch(err){
        return err
     }
     document.body.removeChild(input);
 }