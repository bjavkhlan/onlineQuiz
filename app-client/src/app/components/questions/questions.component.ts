import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import {DataService} from '../../data.service'
import { currentId } from 'async_hooks';
import {IsVisibleDirective} from '../../directive/is-visible.directive'

@Component({
  selector: 'app-questions',
  templateUrl:'questions.component.html'   
})
export class QuestionsComponent implements OnInit {
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

  constructor(private route: ActivatedRoute,private dataService: DataService) {
    this.tempDataQuestions();
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

        this.currentQuestion=this.questions[0];
        this.qnumber=1;

        console.log(this.currentQuestion);
    });    

    });
  }

  tempDataQuestions(){
        //   let level={
        //           subjectid:'5cbb8b7630608654ee905ccd',
        //           levelName: "Level 1",
        //           _id: "5cbb8b7630608654ee905cd6",
        //           questions:[{choices:["ans1", "ans2", "ans3"],_id: "5cbb8b7630608654ee905cd9", question: "Test Question 1", answer: "ans1", type: "multi"},
        //                      {choices:["ans2", "ans1", "ans3"],_id: "5cbb8b7630608654ee905cd8", question: "Test Question 2", answer: "ans2", type: "multi"},
        //                      {choices:["ans3", "ans2", "ans1"],_id: "5cbb8b7630608654ee905cd7", question: "Test Question 3", answer: "ans3", type: "multi"}],
        //            };                      
        // // add property 'useranswer'
        //                  let count=0;
        //                  level.questions.forEach(q =>{
        //                    q['useranswer']='';
        //                    q['count']=count++;
        //                    return q;
        //                  });                    

        //                  this.questions=level.questions;
        //                  console.log(this.questions);

  }

  nextQuestion(){
    if(this.qnumber===this.questions.length)
    {
       this.isNext=false;
       this.isPrev=true;
       //console.log('isPrev:'+this.isPrev);
       //console.log('isNext:'+this.isNext);
    }
    
    else
    {
      this.isNext=true;
      this.isPrev=true;
    this.qnumber=this.qnumber+1;
    this.currentQuestion=this.questions[this.qnumber-1];
    // console.log('isPrev:'+this.isPrev);
    //   console.log('isNext:'+this.isNext);
    }

  }
  currenQuestion(){

  }
  previousQuestions(){
    if(this.qnumber-1===0)
    {
      this.isPrev=false;
      this.isNext=true;
      // console.log('isPrev:'+this.isPrev);
      // console.log('isNext:'+this.isNext);
    }
    else
    {
      this.isNext=true;
      this.isPrev=true;
    this.qnumber=this.qnumber-1;
   
    this.currentQuestion=this.questions[this.qnumber-1];
      //console.log('isPrev:'+this.isPrev);
      //console.log('isNext:'+this.isNext);
    }


  }

  setAnswer(answer){
    this.answers[this.qnumber] = {
      answer: answer,
      questionId: this.currentQuestion._id
    }
   }

   submitanswer(){
    this.dataService.submit_answers(this.levelID,this.answers);
   }

}
