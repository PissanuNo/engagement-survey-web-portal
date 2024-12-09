<template>
    <body>
        
    <div class="boxcomponent">
        <div class="modalhead">
            <img src="/src/assets/images/question.png" alt="Question Icon" class="QuestionIcon">
            <h1><b>Are you sure?</b></h1>
        </div>
                <div class="modalbody">
                
                    <p> Please check your data. We will see you soon.</p>
                </div>
                    <div class="modalfooter">
                        <div class="btn" >
                            <button id="cancel">Cancel</button>
                        </div>
                        <div class="btn" >
                            <button id="confirm">Confirm</button>
                        </div>
                    </div>
        
    </div>
</body>
</template>

<script>
export default {
    name: 'Modal',
}
</script>


<style scoped>
    body{
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        background-color: #f9f9f9;
    }
    .boxcomponent {
        
        width: 709px;
        height: 416px;
        background: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
    }
    .modalhead {
        margin-top: 20px;
        margin-left: 0;
        width: 709px;
        
        
    }

    .modalhead .QuestionIcon {
        width: 96px;
        height: 96px;
        background: url('/src/assets/images/question.png') no-repeat center center;
        background-size: cover;
        margin: 0 auto;
    }

    .modalhead h1 {
        font-size: 36px;
        font-weight: bolder;
        margin-top: 20px;
    }
    .modalbody {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 20px;
        width: 709px;
        margin-left: 10px;
        
    }
    .modalfooter {
        display: flex;        
        margin-top: 20px;
        justify-content: center;
        gap: 50px;

    }

    .btn {
        width: 120px;
        padding: 10px;
        font-size: 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background 0.3s;
        gap: 8px;
        
        
    }

    #cancel {
        background: #ffffff;
        color: #3498db;
        border: 1px solid #3498db;
        border-radius: 5px;
        width: 157px;
        height: 38px;
        
        
        
    }


    #confirm {
        background: #3498db;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        width: 157px;
        height: 38px;
        
    }

    @media   (max-width: 344px) {
  .boxcomponent {
    width: 90%;
    height: auto;
    padding: 10px;
  }

  .modalhead {
    width: 100%;
  }

  .modalhead .QuestionIcon {
    width: 64px;
    height: 64px;
  }

  .modalhead h1 {
    font-size: 24px;
    margin-top: 10px;
    padding-top: 10px;
  }

  .modalbody {
    width: 100%;
    margin-left: 0;
    font-size: 14px;
    line-height: 20px;
    padding-top: 25px;
  }

  .modalfooter {
    display: flex;
    justify-content: center;
    justify-items: center;
    gap: 10px;
    padding-right: 20px;
    margin-bottom: 30px;
  }

  .btn {
    width: 100px;
    height: 38px;
  }
}
 /* Mobilet (481px to 768px) */   
@media (min-width: 320px) and (max-width: 480px) {
  .boxcomponent {
    width: 90%;
    height: auto;
    padding: 10px;
  }

  .modalhead {
    width: 100%;
  }

  .modalhead .QuestionIcon {
    width: 64px;
    height: 64px;
  }

  .modalhead h1 {
    font-size: 24px;
    margin-top: 10px;
    padding-top: 10px;
  }

  .modalbody {
    width: 100%;
    margin-left: 0;
    font-size: 14px;
    line-height: 20px;
    padding-top: 25px;
  }

  .modalfooter {
    display: flex;
    justify-content: center;
    justify-items: center;
    gap: 10px;
    padding-right: 20px;
    margin-bottom: 30px;
  }

  .btn {
    width: 157px;
    height: 38px;
  }
}

/* Tablet (481px to 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .boxcomponent {
    width: 90%;
    height: auto;
    padding: 15px;
  }

  .modalhead {
    width: 100%;
    
  }

  .modalhead .QuestionIcon {
    width: 80px;
    height: 80px;
  }

  .modalhead h1 {
    font-size: 30px;
    margin-top: 15px;
  }

  .modalbody {
    width: 100%;
    margin-left: 0;
    font-size: 15px;
    line-height: 22px;
    padding-top: 20px;
  }

  .modalfooter {
    display: flex;
    justify-content: center;
    justify-items: center;
    gap: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
  }

  .btn {
    width: 157px;
    height: 38px;
  }
}

/* Laptop (769px to 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .boxcomponent {
    width: 80%;
    height: auto;
    padding: 20px;
  }

  .modalhead {
    width: 100%;
  }

  .modalhead .QuestionIcon {
    width: 88px;
    height: 88px;
  }

  .modalhead h1 {
    font-size: 32px;
    margin-top: 20px;
  }

  .modalbody {
    width: 100%;
    margin-left: 0;
    font-size: 16px;
    line-height: 24px;
    padding-top: 20px;
  }

  .modalfooter {
    display: flex;
    justify-content: center;
    justify-items: center;
    gap: 20px;
    padding-right: 20px;
    margin-bottom: 30px;
  }

  .btn {
    width: 157px;
    height: 38px;
  }
}
</style>