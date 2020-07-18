const { I } = inject();
// Add in your custom step files

Given('я нахожусь на странице логина', () => {
  I.amOnPage('/login');
});

When('я заполняю поля формы', table => {
  const tableData = table.parse().rawData;
  tableData.forEach((row) => {
    I.fillField(row[0], row[1])
  });
});

When('я нажимаю на кнопку {string}', name => {
  I.click(name);
});

Then('я вижу тескст {string}', text => {
  I.waitForText(text);
});

Then('я захожу на старницу создания нового кафе', () => {
  I.amOnPage('/newCafe');
});

When('я нажимаю на текст {string}', name => {
  I.click(name)
});

Then('я вижу текст {string}', text => {
  I.waitForText(text);
});

When('я загружаю картинку', table => {
  const tableData = table.parse().rawData;
  I.click('Browse');
  tableData.forEach((row) => {
    I.attachFile(row[0], row[1])
  });
});
