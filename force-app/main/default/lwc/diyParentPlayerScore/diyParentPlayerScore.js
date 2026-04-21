import { LightningElement, track } from 'lwc';

export default class DiyParentPlayerScore extends LightningElement {
    name = '';
    score;
    team = '';
    addMore;
    topScorerText = '';
    @track players = [];
    handleNameChange(event){
        this.name=event.target.value;
        this.addMore=false;
    }
    handleScoreChange(event){
        this.score=event.target.value;
    }
    handleTeamChange(event){
        this.team = event.target.value;
    }
    handleAddMoreChange(event){
        this.addMore = event.target.checked;
        if(this.addMore==true){
            this.addPlayer();
        }
    }
    addPlayer(){
        if(this.name && this.team && this.score !== null && this.score !== undefined){
            const scoreNum = Number(this.score);
            this.players.push({
            name:this.name,
            score:scoreNum,
            team:this.team
        });
        this.name='';
        this.score='';
        this.team='';
        }
    }
    handleSubmit() {
        const player = {
            name: this.name,
            score: this.score,
            team: this.team
        };
        // If you already have addPlayer logic, reuse it:
        this.addPlayer();

        // Optional: reset fields
        this.name = '';
        this.score = null;
        this.team = '';
        this.addMore = false;
    }
    handleTopScorer(){
        console.log('1');
        if (this.players.length === 0) return;
        // Find top scorer
        let topPlayer = this.players.reduce((prev, curr) => {
            return prev.score > curr.score ? prev : curr;
        });
        
        console.log('2');
        this.topScorerText = `The Top Player is ${topPlayer.name} with a score of ${topPlayer.score}`;
        console.log('3',this.topScorerText);

    }
    get disableButton() {
        return this.players.length === 0;
    }
}