//example data
//*****************************************************************
  // firebaseRef.set({
  //   isRunning: true,
  //   user: {
  //     name: 'Baltej',
  //     age: 18
  //   },
  //   app: {
  //     name: 'Todo App',
  //     version: '1.0.0'
  //   },
  //   todos: {
  //     '123bacds': {
  //       text: 'Film Some Videos'
  //     }
  //   }
  // });


//Update
//****************************************************************
//****************************************************************
//two ways to update child

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Aile'
// });
// firebaseRef.child('app').update({
//   name: 'TodoApplication'
// });
// firebaseRef.child('user').update({
//   name: 'perez'
// });

//Remove
//****************************************************************
//****************************************************************
//whipe the whole database
// firebaseRef.Remove();

//remove a item
// firebaseRef.child('app/name').remove();


//Fetch Data
//****************************************************************
//****************************************************************

//Only gets fired once

// firebaseRef.child('user').once('value').then((snapshot)=>{
//   console.log('value received', snapshot.key, snapshot.val());
// },(e)=>{
//   console.log('unable to fetch value');
// });

// var logData = (snapshot)=>{
//   console.log('Got value', snapshot.val());
// };

// firebaseRef.on('value', logData);

// //turn off the listener to value
// firebaseRef.off(logData);

//working with arrays
//****************************************************************
//****************************************************************
// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added' ,(snapshot)=>{
//   console.log('child_added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_removed' ,(snapshot)=>{
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed' ,(snapshot)=>{
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// var newNotesRef = notesRef.push({
//   text: 'walk the dog!'
// });
// console.log('ID', newNotesRef.key);
