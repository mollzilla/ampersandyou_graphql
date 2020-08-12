import graphql from 'graphql';
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLID, GraphQLList} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { 
      type: CategoryType,
      resolve(parent, args) {
        console.log(parent);
        return "mili";
      }
    },
    date: { type: GraphQLDateTime },
    comments: { type: GraphQLString },
    likes: { type: GraphQLInt },
  })
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args) {
        return { category: parent.id }
      }
    }
  })
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    author: { type: GraphQLString },
    content: { type: GraphQLString },
    date: { type: GraphQLDateTime },
    likes: { type: GraphQLInt }
  })
});

const EmailingSubscriberType = new GraphQLObjectType({
  name: 'EmailingSubscriber',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: { type: GraphQLString },
    email: { type: GraphQLString },
    comments: { type: CommentType },
    likes: { type: GraphQLInt },
  })
});


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    article: {
      type: ArticleType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db / other source
        return {
          name: "mili"
        }
      }
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db / other source
        return {
          name: "terceracosa"
        }
      }
    },
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db / other source
        return {
          name: "terceracosa"
        }
      }
    },
    emailingSubscriber: {
      type: EmailingSubscriberType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db / other source
        return {
          name: "otracosa"
        }
      }
    },
    articles: {
      type: new GraphQLList(ArticleType),
      resolve(parent, args) {
        return articles;
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve(parent, args) {
        return categories;
      }
    },
    emailingSubscribers: {
      type: new GraphQLList(EmailingSubscriberType),
      resolve(parent, args) {
        return emailingSubscribers;
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return comments;
      }
    },
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});

let mili;