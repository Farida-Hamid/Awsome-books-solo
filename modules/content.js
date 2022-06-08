export default function showHide(flag){
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page3').style.display = 'none';
  switch(flag){
    case 1:
      document.getElementById('page1').style.display = 'block';
      break;
    case 2:
      document.getElementById('page2').style.display = 'block';
      break;
    case 3:
      document.getElementById('page3').style.display = 'block';
  }
}
