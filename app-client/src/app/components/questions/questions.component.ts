import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {DataService} from '../../data.service'
import { select } from '@angular-redux/store';


@Component({
  selector: 'app-questions',
  templateUrl:'questions.component.html',
  styleUrls:['questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @select() subjectName;
  @select() levelName;
  levelID:string;
  subjectID:string;
  private levelQuestions={} ;    
  private questions=[];
  private answers = [];
  currentQuestion = {};
  qnumber:number;
  isNext:Boolean=true;
  isPrev:Boolean=false;
  curranswer:string='';
  showAnswer=false;
  quizResult={correct:0,total:0};

  constructor(private route: ActivatedRoute,private dataService: DataService) {
     }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this.subjectID = p['subjectid'];   
      this.levelID = p['levelid'];   
     
      this.dataService.get_questions(this.levelID).subscribe((res:[])=>{    

                  let count=0;
                  let dataArr=[];
                  dataArr=res;
                  dataArr.forEach(q =>{                          
                           q['useranswer']='';
                           q['count']=count++;
                           return q;
                         });                    


        this.questions = dataArr;
        for (let i = 0; i < this.questions.length; i++) this.answers.push({});                 
        this.currentQuestion=this.questions[0];
        this.qnumber=1;

    });    

    });
  }

  nextQuestion(){
    if(this.qnumber===this.questions.length)
    {
       this.isNext=false;
       this.isPrev=true;
    }
    
    else
    {
      this.isNext=true;
      this.isPrev=true;
    this.qnumber=this.qnumber+1;
    if(this.qnumber===this.questions.length)
    {
       this.isNext=false;
       this.isPrev=true;
    }

    this.currentQuestion=this.questions[this.qnumber-1];    
    }

  }
  
  previousQuestions(){
    if(this.qnumber-1===0)
    {
      this.isPrev=false;
      this.isNext=true;    
    }
    else
    {
      this.isNext=true;
      this.isPrev=true;
    this.qnumber=this.qnumber-1;
    if(this.qnumber-1===0)
    {
      this.isPrev=false;
      this.isNext=true;
    }
    this.currentQuestion=this.questions[this.qnumber-1];      
    }

  }

  setAnswer(answer){
    this.answers[this.qnumber-1] = {
      answer: answer,
      questionId: this.currentQuestion['_id']
    }
   }

   submitanswer(){
   this.dataService.submit_answers(this.levelID,this.answers).subscribe( data=> {
     this.quizResult=data;   
     this.showAnswer=true;
      },err=> {
  console.log(err);
     })
      
   }

}
