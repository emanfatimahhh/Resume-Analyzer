function StatsCard({
 title,
 value
}) {

 return (

<div className="
bg-white
rounded-2xl
shadow-lg
p-6
text-center
">

<h3 className="
text-gray-500
text-sm
">
{title}
</h3>

<h1 className="
text-4xl
font-bold
text-indigo-600
">
{value}
</h1>

</div>

 );
}

export default StatsCard;