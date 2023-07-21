//***************task***** */
// В доме два лифта.
// Реализовать алгоритм отправки наиближайшего на вызывающий этаж.
// Алгоритм будет применяться в домах разной этажности.
// *Алгоритм будет применяться в домах с количеством > 2 лифтов
// Пример:
// в доме 19 этажей
// работают лифт А и лифт В
// лифт А находиться на 0 этаже
// лифт В находиться на 8 этаже
// на вход: 1
// отправляем лифт А







class Elevator {
   constructor(name, currentFloor) {
     this.name = name;
     this.currentFloor = currentFloor;
   }
 
   getDistanceTo(floor) {
     return Math.abs(floor - this.currentFloor);
   }
 }
 
 function findNearestElevator(elevators, calledFloor) {
   let nearestElevator = null;
   let minDistance = Infinity;
 
   for (const elevator of elevators) {
     const distance = elevator.getDistanceTo(calledFloor);
     if (distance < minDistance) {
       minDistance = distance;
       nearestElevator = elevator;
     }
   }
 
   return nearestElevator;
 }
 
 // Пример
 const elevatorA = new Elevator("A", 0);
 const elevatorB = new Elevator("B", 8);
 
 const elevators = [elevatorA, elevatorB];
 const calledFloor = 1;
 
 const nearestElevator = findNearestElevator(elevators, calledFloor);
 console.log(`Отправляем лифт ${nearestElevator.name}`);