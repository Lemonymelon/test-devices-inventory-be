it("returns all device brands with access to all brand properties when no arguments are passed", () => {
  const query = "{ brand { brand_id\nbrand_name } }";
  return request
    .get("/graphql")
    .send({ query })
    .then(({ body: { data: { brand } } }) => {
      expect(brand.length).to.equal(4);
      expect(brand[0].brand_id).to.equal("1");
      expect(Object.keys(brand[0])).to.eql(["brand_id", "brand_name"]);
    });
});

it("returns one device brand when passed a brand id as an argument", () => {
  const query = "{ brand(brand_id: 2) { brand_id\nbrand_name } }";
  return request
    .get("/graphql")
    .send({ query })
    .then(({ body: { data: { brand } } }) => {
      expect(brand.length).to.equal(1);
      expect(brand[0].brand_id).to.equal("2");
    });
});

it("returns the correct error if passed an argument of an incorrect brand ", () => {
  const query = '{ brand(brand_id: "two") { brand_id\nbrand_name } }';
  return request
    .get("/graphql")
    .send({ query })
    .then(({ body: { errors } }) => {
      const [messages] = errors;
      const { msg } = messages;
      expect(msg).to.equal(
        'argument "two" is incorrect data type; it must be a integer'
      );
    });
});
