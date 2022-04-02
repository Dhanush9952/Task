const arr: { id: number; name: string }[] = [
    { id: 1, name: 'Tom' },
    { id: 2, name: 'Alfred' },
    { id: 3, name: 'Fred' },
  ];
  
  const result = arr.some((obj) => {
    return obj.id === 2;
  });

  console.log(result); // 👉️ true

if (result) {
  console.log('✅ the object is contained in the array');
} else {
  console.log('⛔️ the object is NOT contained in the array');
}