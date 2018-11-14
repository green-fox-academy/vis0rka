export { };
/* Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost */

class BlogPost {

  authorName: string;
  title: string;
  text: string;
  publicationDate: string;


  constructor(title: string, authorName: string, publicationDate: string, text: string) {
    this.title = `"${title}"`;
    this.authorName = ` title by ${authorName}`;
    this.publicationDate = `posted at ${publicationDate}`;
    this.text = ` ${text}`;

  }


  blogPoster(): void {
    console.log(this.title + this.authorName + this.publicationDate + this.text)
  }
}

class Blog {
  name: string;
  blogPostList: BlogPost[] = [];

  constructor(name: string) {
    this.name = name
  }

  addBlogpost(post: BlogPost) {
    this.blogPostList.push(post)
  }
  deleteBlogPost(blogindex: number) {
    if (blogindex > this.blogPostList.length) {
      console.log(`this ${blogindex} index does not exist!! Please choose 0 - ${this.blogPostList.length - 1}`);
    } else {
      this.blogPostList.splice(blogindex, 1)
      console.log(`Deleted this post "Title:" ${this.blogPostList[blogindex].title}`);

    }
  }
  updateBlogPost(blogindex:number, ttl: string, aName: string, pDate: string, txt: string) {
    if (blogindex > this.blogPostList.length-1) {
      console.log(`this ${blogindex} index does not exist!! Please choose 0 - ${this.blogPostList.length - 1}`);
    } else {
      this.blogPostList[blogindex].title = ttl;
      this.blogPostList[blogindex].authorName = aName;
      this.blogPostList[blogindex].publicationDate = pDate;
      this.blogPostList[blogindex].text = txt;
    }
  }

}

const receptek = new Blog("receptek");

receptek.addBlogpost(new BlogPost("Lorem Ipsum", "John Doe", "2000.05.04.", "Lorem ipsum dolor sit amet."))
receptek.addBlogpost(new BlogPost("Wait but why", "Tim Urban", "2010.10.10.", "A popular long-form, stick-figure-illustrated blog about almost everything."))
receptek.addBlogpost(new BlogPost("One Engineer Is Trying to Get IBM to Reckon With Trump", "William Turton", "2017.03.28.", "Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing."))


receptek.updateBlogPost(0,"kolbasz","kolbasz","kolbasz","kolbasz",)

console.log(receptek);
