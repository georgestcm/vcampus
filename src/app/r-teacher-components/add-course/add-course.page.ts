import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.page.html",
  styleUrls: ["./add-course.page.scss"],
})
export class AddCoursePage implements OnInit {
  constructor() {}
  sectionNumber = 1;
  chapterNumber = 1;
  topicNumber = 1;

  sectionList = [];
  chapterList = [];
  activeSectionNum = 1;

  lastChapter = 0;

  ngOnInit() {
    this.addChapter(0);
  }

  addChapter(chapterNum) {
    var chapter = {
      chapterNum: chapterNum + 1,
      chapterName: "",
      topics: [
        {
          topicNum: 1,
          topicName: "",
          paragraphs: [{ paragraphNum: 1, paragraph: "" }],
        },
      ],
    };

    this.chapterList.push(chapter);
    this.lastChapter = chapterNum + 1;
  }

  addTopic(chapterNum) {
    var chapterIndex = this.chapterList.findIndex(
      (x) => x.chapterNum == chapterNum
    );
    var lastChapter = this.chapterList[chapterIndex];

    var lastTopic = lastChapter.topics[lastChapter.topics.length - 1];
    var newTopic = {
      topicNum: lastTopic.topicNum + 1,
      topicName: "",
      paragraphs: [{ paragraphNum: 1, paragraph: "" }],
    };
    this.chapterList[chapterIndex].topics.push(newTopic);
  }

  addParagraph(chapterNum, topicNum) {
    var chapterIndex = this.chapterList.findIndex(
      (x) => x.chapterNum == chapterNum
    );
    var selectedChapter = this.chapterList[chapterIndex];

    var topicIndex = selectedChapter.topics.findIndex(
      (x) => x.topicNum == topicNum
    );
    var selectedTopic = selectedChapter.topics[topicIndex];

    var lastParagraph =
      selectedTopic.paragraphs[selectedTopic.paragraphs.length - 1];

    var newParagraph = {
      paragraphNum: lastParagraph.paragraphNum + 1,
      paragraph: "",
    };

    this.chapterList[chapterIndex].topics[topicIndex].paragraphs.push(
      newParagraph
    );
  }

  addSection() {
    var chapters = this.chapterList;
    console.clear();
    console.dir(chapters);
  }
}
