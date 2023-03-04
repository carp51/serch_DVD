// 単語を配列に保存する
const words = [['GLORYQUEST_A 02', 'GLORYQUEST gloryquest GLORYQUEST'], ['MOODYZ(BEST HITS)_A 02', 'MOODYZ(BEST HITS) moodyz(best hits) MOODYZ(BEST HITS)'], ['本中(BEST HITS)_A 02', '本中(BEST HITS) 本中(best hits) ほんちゅう(BEST HITS)'], ['kawaii (BEST HITS)_A 02', 'kawaii (BEST HITS) kawaii (best hits) kawaii (BEST HITS)'], ['Madonnna (BEST HITS)_A 02', 'Madonnna (BEST HITS) madonnna (best hits) Madonnna (BEST HITS)'], ['溜池ゴロー(BEST HITS)_A 02', '溜池ゴロー(BEST HITS) 溜池ゴロー(best hits) ためいけごろー(BEST HITS)'], ['OPPAI (BEST HITS)_A 02', 'OPPAI (BEST HITS) oppai (best hits) OPPAI (BEST HITS)'], ['エマニエル(BEST HITS)_A 02', 'エマニエル(BEST HITS) エマニエル(best hits) えまにえる(BEST HITS)'], ['ながえSTYLE (BEST HITS)_A 02', 'ながえSTYLE (BEST HITS) ながえstyle (best hits) ながえSTYLE (BEST HITS)'], ['BURST (BEST HITS)_A 02', 'BURST (BEST HITS) burst (best hits) BURST (BEST HITS)'], ["AVSCollecctor's (BEST HITS)_A 02", "AVSCollecctor's (BEST HITS) avscollecctor's (best hits) AVSCollecctor's (BEST HITS)"], ['JET (BEST HITS)_A 02', 'JET (BEST HITS) jet (best hits) JET (BEST HITS)'], ['PREMIUM (BEST HITS)_A 02', 'PREMIUM (BEST HITS) premium (best hits) PREMIUM (BEST HITS)'], ['ATTACKERS (BEST HITS)_A 02', 'ATTACKERS (BEST HITS) attackers (best hits) ATTACKERS (BEST HITS)'], ['MARRION_A 02', 'MARRION marrion MARRION'], ['Nadeshiko_A 02', 'Nadeshiko nadeshiko Nadeshiko'], ['花と蜜_A 02', '花と蜜 花と蜜 はなとみつ'], ['チキチキ_A 02', 'チキチキ チキチキ ちきちき'], ['GGS_A 02', 'GGS ggs GGS'], ['unfinished_A 02', 'unfinished unfinished unfinished'], ['HERO_A 02', 'HERO hero HERO'], ['オルガ(BEST HITS)_A 01', 'オルガ(BEST HITS) オルガ(best hits) おるが(BEST HITS)'], ['アイポケ(BEST HITS)_A 01', 'アイポケ(BEST HITS) アイポケ(best hits) あいぽけ(BEST HITS)'], ['S1GIRLS (BEST HITS)_A 01', 'S1GIRLS (BEST HITS) s1girls (best hits) S1GIRLS (BEST HITS)'], ['アリスJAPAN (BEST HITS)_A 01', 'アリスJAPAN (BEST HITS) アリスjapan (best hits) ありすJAPAN (BEST HITS)'], ['S1 (BEST HITS)_A 01', 'S1 (BEST HITS) s1 (best hits) S1 (BEST HITS)'], ['DORAMA_Q 01', 'DORAMA dorama DORAMA'], ['ニューハーフ系_Q 01', 'ニューハーフ系 ニューハーフ系 にゅーはーふけい'], ['ビビアン_Q 02', 'ビビアン ビビアン びびあん'], ['U&K_Q 02', 'U&K u&k U&K'], ['レズれ_Q 02', 'レズれ レズれ れずれ'], ['ダスッ!_Q 03', 'ダスッ! ダスッ! だすっ!'], ['痴女HEVEN_Q 04', '痴女HEVEN 痴女heven ちじょHEVEN'], ['Kira★Kira_Q 04', 'Kira★Kira kira★kira Kira★Kira'], ['アイポケ_Q 05', 'アイポケ アイポケ あいぽけ'], ['kawaii_Q 07', 'kawaii kawaii kawaii'], ['WANZ_Q 08', 'WANZ wanz WANZ'], ['S1_S 01', 'S1 s1 S1'], ['S1GIRLS_S 03', 'S1GIRLS s1girls S1GIRLS']]
function myFunction() {
  const input = document.getElementById('myInput');
  const filter = input.value.toUpperCase();
  const div = document.getElementById("myDiv");

  // Clear the previous search results
  div.innerHTML = '';

  // If the search query is empty, return
  if (filter === '') {
    return;
  }

  // Loop through all words in the array, and show those that match the search query
  for (let i = 0; i < words.length; i++) {
    const word = words[i][1];
    if (word.toUpperCase().indexOf(filter) > -1) {
      const p = document.createElement('p');
      p.textContent = words[i][0];
      div.appendChild(p);
    }
  }
}
