<template>
    <div class="d-flex flex-column align-self-center bg-white p-5 rounded-5 text-start" style="width:100%; height: inherit;">
        <div class="card">
            <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">

                    <h4>ИМЯ</h4>
                    <p class="text-secondary mb-1">физ или юр лицо</p>
                </div>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">ФАМИЛИЯ</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        Фамилия
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        v@mai.com
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'usPage'
}
</script>

<style>
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: .25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}

.me-2 {
    margin-right: .5rem !important;
}
</style>
