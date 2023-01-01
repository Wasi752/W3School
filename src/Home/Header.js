const a = "p-2 m-5 text-black-700 hover:text-[#32CD32]";
function Header(){
    return(
        <div class="flex">
            <div class="w-6/12 h-[8%] flex">
                <div class="w-[8%] h-[8%] mt-1 md-6 mr-5 m-7"><img src="images/w3schools.jpeg" /></div>
                <div class="w-[0%] h-[8%] mt-3 md-6"></div>
                <span class={a}>tutorials</span>
                <span class={a}>References</span>
                <span class={a}>Exercises</span>
                <span class={a}>Videos</span>
            </div>
            <div class="w-6/12 h-[8%] flex justify-end">
                <div class="w-[3%] h-[8%] mt-7 md-5 mr-1"><img src="images/drack.jpeg" /></div>
                <div class="w-[5%] h-[8%] mt-5 md-5 mr-1"><img src="images/World.jpeg" /></div>
                <div class="w-[4%] h-[8%] mt-6 md-5 mr-1"><img src="images/srache.jpeg" /></div>
                <div
                    class="w-[15%] mt-4 ml-0 md-5 border rounded-full bg-black hover:bg-green-200 text-white text-center p-2">
                    Upgrade</div>
                <div
                    class="w-[15%] mt-4 ml-5 md-5 border rounded-full bg-[#FFC0CB] hover:bg-green-200 text-black text-center p-2">
                    Get certified</div>
                <div
                    class="w-[20%] mt-4 ml-5 md-5 border rounded-full bg-[#FFFFC2] hover:bg-green-200 text-black text-center p-2">
                    Create Website</div>
                <div
                    class="w-[15%] mt-4 ml-5 md-5 border rounded-full bg-[#008000] hover:bg-green-200 text-white text-center p-2">
                    Log in</div>
            </div>
        </div>
    )
}
export default Header;