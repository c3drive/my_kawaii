const gnar = "gnarly"
const indo = ({
    file = __filename,
    dir = __dirname
}) => (
    <p>
        {dir}: {file}
    </p>
);

switch (gnar) {
    default:
        console.log("gnarly");
        break;
}