function scrollToWeek() {
    var selectedWeek = document.getElementById('weekSelector').value;
    var targetWeek = document.getElementById(selectedWeek);
    
    if (targetWeek) {
      targetWeek.scrollIntoView({ behavior: 'smooth' });
    }
  }
  