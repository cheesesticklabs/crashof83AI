window.LAB_PASSWORDS={
  gates:{
    history:['pong'],
    good:['pacman'],
    brands:['breakout'],
    et:['pitfall'],
    crash:['centipede'],
    'crash-explanation':['adventure'],
    steam:['gta6','gtavi'],
    'today-examples':['battlepass'],
    'ai-reflection':['ocarina'],
    arcade:['freeplay']
  },
  isMaster(answer){
    return String(answer).toLowerCase().replace(/[^a-z0-9]/g,'')==='atari5600';
  },
  accepts(pageId,answer){
    const normalized=String(answer).toLowerCase().replace(/[^a-z0-9]/g,'');
    return this.isMaster(answer)||(this.gates[pageId]||[]).includes(normalized);
  }
};
